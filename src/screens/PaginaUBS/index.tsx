import React from "react";
import { useState, useEffect } from "react";
import AvisosCard, {AvisosProps} from "../../components/AvisosCard";
import Header from "../../components/Header";
import { onSnapshot, collection, getFirestore, where, query } from "firebase/firestore";
import {app} from '../../config/firebase';
import {getDownloadURL, ref, getStorage } from 'firebase/storage';
import { Alert, Button } from "react-native";
import * as Notifications from 'expo-notifications';
import {
    Container,
    Title,
    Plantao,
    Text,
    Lotacao,
    Avisos,
    AvisosList
} from './styles'

import PerfilDr from '../../components/PerfilDr';
import LotacaoCard from "../../components/LotacaoCard";

    

export interface DadosAvisos extends AvisosProps{
    id:string;
}

interface Props{
    type: 'cheia' | 'vazia' | 'intermediario';
}



export default function PaginaUBS( {route},{type}:Props){


    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [doctorsId, setDoctorsId] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [doctorLicense, setDoctorLicense] = useState('');
    const [doctorSpecialty, setDoctorSpecialty] = useState('');
    const [ubsId, setUbsId] = useState(route?.params?.id)
    const [notices, setNotices] = useState();

    const handleCallNotifications = async()=>{
        const {status} = await Notifications.getPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("Não noticações não ativas!")
            return
        }
        
        await Notifications.scheduleNotificationAsync({
            content:{
                title: "Hello Word",
                body: "Noticação funcionando",
                sound:true
            },
            trigger: {
                seconds:1,
            }
        })
    }

    

    const ubsName = route?.params?.ubsName;
    const estado = route?.params?.estado;
    type= estado;

            
    const storage = getStorage(); 
    const db=getFirestore(app);
    const colRef = query(collection(db, "notices"), where('unity','==', ubsId ))
    const doctorRef = query(collection(db, "doctors"), where('unity','==', ubsId ))
    const storageRef = ref(storage, `images/${doctorsId}`);

    getDownloadURL(storageRef)
    .then((url) => {
      setImageUrl(url);
      setTimeout(() => { 
        setLoading(false);
      }, 1000); 
    }) 
    .catch((error: any) => { 
      console.log(error);
    });
    

    useEffect(() => {
      

          onSnapshot(doctorRef, (QuerySnapshot) => {
            const doctors:any = []
            QuerySnapshot.forEach((doc) => {
                const {name, license, unity, specialty} = doc.data()
                doctors.push({
                    id: doc.id,
                    name, 
                    license, 
                    unity,
                    specialty,
                })
                setDoctorsId(doc.id);
                setDoctorLicense(license);
                setDoctorName(name); 
                setDoctorSpecialty(specialty.charAt(0).toUpperCase() + specialty.slice(1));
            })
        })

            onSnapshot(colRef, (QuerySnapshot) => {
                const notices:any = []
                QuerySnapshot.forEach((doc) => {
                    const {description, title, unity} = doc.data()
                    notices.push({
                        id: doc.id,
                        description, 
                        title, 
                        unity,
                    })
                })
                setNotices(notices);
            })
  
      }, []);
    

    const [titleColor, setTitleColor] = useState('');
    const [msg, setMsg] = useState('');

    const changeTitleColor = ({type}) =>{
        return (
        type ==='cheia' ? setTitleColor('Vermelho') : type ==='vazia' ? setTitleColor('Verde') : setTitleColor('Amarelo')
        );    
    }

    const changeMsg = ({type}) =>{
        return (
        type ==='Cheia' ? setMsg('A UBS encontra-se muita cheia') : type ==='Vazia' ? setMsg('A UBS encontra-se relativamente vazia') : setMsg('A UBS encontra-se relativamente cheia')
        );    
    }

    useEffect(()=>{
        changeTitleColor({type});
        changeMsg({type})
    })

    
    return(
        
        <Container>
            <Header/>

                <Title>{ubsName}</Title>
                <Plantao>
                    <Text>Plantão</Text>
                    <PerfilDr specialty={doctorSpecialty} nome={doctorName} registro={doctorLicense} source={{uri: imageUrl}} style={{ width: "100%", height: "100%" }} />
                </Plantao>
                <Lotacao>
                    <Text>Capacidade</Text>
                    <LotacaoCard type = 'vazia' titleColor={titleColor}  msg={msg}
                    />  
                </Lotacao>
                
                <Avisos>
                
                    <Text>Avisos</Text>
                    <AvisosList 
                        data={notices}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=><AvisosCard data = {item} />}
                    />
                </Avisos>
 
                <Button title="Teste de notificação" onPress={handleCallNotifications}  ></Button>
        </Container>
    )

      
}