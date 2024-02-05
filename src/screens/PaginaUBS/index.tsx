import React from "react";
import { useState, useEffect } from "react";
import AvisosCard, {AvisosProps} from "../../components/AvisosCard";
import { onSnapshot, collection, getFirestore, where, query } from "@firebase/firestore";
import {app} from '../../config/firebase';
import {getDownloadURL, ref, getStorage } from 'firebase/storage';
import { Alert, Button } from "react-native";
import LogoColorida from "../../components/LogoColorida";
import { View } from "react-native";
import {
    Container,
    Title,
    Plantao,
    Text,
    Lotacao,
    Avisos,
    AvisosList,
    Fechada,
    Header
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
    const [capacity, setCapacity] = useState()
    const [status, setStatus] = useState('')

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


            
    const storage = getStorage(); 
    const db=getFirestore(app);
    const colRef = query(collection(db, "notices"), where('unity','==', ubsId ))
    const doctorRef = query(collection(db, "doctors"), where('unity','==', ubsId ))
    const unitysRef = query(collection(db, "unitys"), where('uid','==', ubsId ))
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

            onSnapshot(unitysRef, (QuerySnapshot) => {
                QuerySnapshot.forEach((doc) => {
                    const unitys = doc.data()
                    setCapacity(unitys.capacity);
                    setStatus(unitys.status);
                    console.log(status)
                })   
            })
  
      }, []);
    

    const [titleColor, setTitleColor] = useState('');
    const [msg, setMsg] = useState('');

    const changeTitleColor = ({capacity}) =>{
        return (
            capacity ==='vazia' ? setTitleColor('Azul') : capacity ==='não está vazia' ? setTitleColor('Verde') : capacity ==='quase cheia' ? setTitleColor('Amarelo') : setTitleColor('Vermelho')
        );    
    }

    const changeMsg = ({capacity}) =>{
        return (
            capacity ==='vazia' ? setMsg('A UBS está vazia') : capacity ==='não está vazia' ? setMsg('A UBS não está vazia') : capacity ==='quase cheia' ? setMsg('A UBS está quase cheia'): setMsg('A UBS está cheia')
        );    
    }

    useEffect(()=>{
        changeTitleColor({capacity});
        changeMsg({capacity})
    })

    
    return(

        
        <Container>

<LogoColorida/>
       
                <Title>{ubsName}</Title>
                {
                status == 'aberta' ? (
                    <View>
                        <Plantao>
                    <Text>Plantão</Text>
                    <PerfilDr specialty={doctorSpecialty} nome={doctorName} registro={doctorLicense} source={{uri: imageUrl}} style={{ width: "100%", height: "100%" }} />
                </Plantao>
                <Lotacao>
                    <Text>Capacidade</Text>
                    <LotacaoCard type = {capacity} titleColor={titleColor}  msg={msg}
                    />  
                </Lotacao>

                    </View>
                ) :(
                    <Fechada>
                        <Text>A UBS se encontra fechada</Text>
                    </Fechada>
                )
            }

                <Avisos>
                    <Text>Avisos</Text>
                    <AvisosList 
                        data={notices}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=><AvisosCard data = {item} />}
                    />
                </Avisos>

        </Container>
    )
}