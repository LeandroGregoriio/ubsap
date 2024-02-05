import react from "react";
import { useEffect, useState } from "react";
import {Container, HomeText, DestaquesText, Cards, Header} from './styles';
import Card from '../../components/Card';
import {UBSCardProps} from '../../components/UBSCard';
import UBSCard from "../../components/UBSCard";
import { collection, getFirestore, onSnapshot, doc } from "firebase/firestore";
import {app} from '../../config/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logo from "../../components/Logo";

import {Title, UBSList} from './styles'

export interface DataListProps extends UBSCardProps {
    id:string,
}

export default function Home({ navigation}:any){

 
    const db = getFirestore(app);
    const [unitys, setUnitys] = useState(); 

    useEffect(() => {

        const auth = getAuth(); 
        onAuthStateChanged(auth, (user)=>{
          console.log(user?.uid,'teste');
        }) 
     

        const colRef = collection(db, "unitys")
          onSnapshot(colRef, (QuerySnapshot) => {
              const unitys:any = []
              QuerySnapshot.forEach((doc) => {
                  const {capacity, ubsName, status, time, timeNow, estado} = doc.data()
                  unitys.push({
                      id: doc.id,
                      capacity, 
                      ubsName, 
                      status,
                      time,
                      timeNow,
                      estado
                  })
              })
              setUnitys(unitys);
          })
  
      }, []);

    return(
        <Header>
            <Logo/>
        <Container>
            
            <HomeText>Home</HomeText>
  
                <DestaquesText>Destaques</DestaquesText>
                <Cards>
                    <Card 
                    title='Medicamentos' 
                    onPress={()=>navigation.navigate("MedicineScreen" )}
                    source={require('../../assets/IconPills.png')}
                    />
                    <Card 
                    title='Dieta' 
                    onPress={()=>{
                        navigation.navigate("DietScreen")
                    }}
                    source={require('../../assets/DietIcon.png')}
                    />
                </Cards>
                <Title>Acessar UBS</Title>
                <UBSList 
                    data={unitys}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><UBSCard data={item} onPress={()=>navigation.navigate("PaginaUBS", item)} />}
                />
        </Container>
        </Header>
    )
}