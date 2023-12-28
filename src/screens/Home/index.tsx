import react from "react";
import { useEffect, useState } from "react";
import {Container, HomeText, DestaquesText, Cards} from './styles';
import Card from '../../components/Card';
import {UBSCardProps} from '../../components/UBSCard';
import UBSCard from "../../components/UBSCard";
import Header from "../../components/Header";
import { collection, getFirestore, onSnapshot, doc } from "firebase/firestore";
import {app} from '../../config/firebase'

import {Title, UBSList} from './styles'

export interface DataListProps extends UBSCardProps {
    id:string,
    
}

export default function Home({route, navigation}:any){


    const db = getFirestore(app);
    const [unitys, setUnitys] = useState();

    useEffect(() => {

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
        
        <Container>
            <Header/>

            <HomeText>Home</HomeText>
  
                <DestaquesText>Destaques</DestaquesText>
                <Cards>
                    <Card title='Medicamentos' type='medicamentos' nome='pill' onPress={()=>navigation.navigate('MedicineScreen')} />
                    <Card title='Dieta' type='dieta' nome='food-off'  />
                </Cards>
                <Title>Acessar UBS</Title>
                <UBSList 
                    data={unitys}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><UBSCard data={item} onPress={()=>navigation.navigate("PaginaUBS", item)} />}
                />
        </Container>
    )
}