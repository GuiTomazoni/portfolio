import React from 'react';
import fotoPepsi from "../../Assets/fotoPepsi.jpeg"
import { Image } from "react-bootstrap";
import "./About.css";

const about = (props) => {
return(
    <div className="background">
        <Image className="perfil Sobre" src={fotoPepsi}/>

        <div className="container-text">
            <h1 className="Sobre">Guilherme Tomazoni</h1>
            <p className="Sobre">
                Oi, meu nome é Guilherme Lisowski Tomazoni, nasci em 28 de junho de 1996 em Porto Algre,
                Rio Grande do sul.
                Após me formar no ensino médio em 2015, entrei para o Exército como Soldado no Hospital Militar,
                me matriculei na faculdade Anhanguera, para o curso de Administração, o qual eu tranquei no 
                mesmo ano.
                Em 2016, após me tornar do efetivo profissional no Exército, fui mandado para um curso de qualificação
                militar, na área de saúde, tendo um bom aproveitamento e auxiliando meu trabalho na parte de 
                auditoria hospitalar.
                Em 2017 percebi que o que eu realmente gostava era Tecnologia da Informação. Percebido isso, 
                me matriculei na Estácio para o curso de Análise e Desenvolvimento de Sistemas, onde acabei tendo uma
                paixão por desenvolver.
                Em 2018, me indicaram para o curso de Técnico de Informática com ênfase em programação, da Fundatec,
                onde eu resolvi me inscrever e trancar a faculdade, pois no técnico focava naquilo que eu amava e 
                não tive muito na faculdade.
                Agora em 2019, estou no segundo semestre do técnico, saí do Exército para buscar um emprego na área de
                TI e seguir o caminho que eu gosto, como desenvolvedor.
                Junto com a paixão por codar, nutro um amor pela área de segurança. Pentest, ou Hacking ético, apareceu
                por acaso e me conquistou, sendo mais um hobbie da área.     
            </p>
        </div>
    </div>
    
)
}

export default about;