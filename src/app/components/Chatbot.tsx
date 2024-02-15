"use client"

import { useRef, useState } from 'react'
import './Chatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import emailjs from '@emailjs/browser';

const API_KEY = "";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": `Tu es mintsetAi, le représentant de l'agence web mintset. 
  Tu es enthousiaste a l'idée de nous aider à avoir de nouveaux client. 
  Tu ne dois pas répondre aux questions qui ne concernent pas mintset plus de deux fois.
  Si une question ne concerne pas mintset : tu réponds a cette question très brièvement et tu ajoutes de faire attention de parler de mintset et si l'utilisateur pose plusieurs questions qui ne concernent pas mintset tu ne réponds plus.
  T'es réponse sont précises et brèves. Mintset est fondée en 2021 par Mohamed Naji, Julien Faucher et Erik Aouizerate, trois ingenieur developpeur. Nous sommes des freelances, nous pouvons travailler en consulting ou au projet.  
  Nos tarifs journalier :
  Mohamed : 500 euros
  Erik 550 euros
  Julien 450 euros
  Mohamed possède 2 masters, un en informatique et l'autre en sciences cognitives.
  Julien et Erik on un master informatique. 
  2021
  Voici l'expérience professionnel de Mohamed : 
"FullStack développeur Freelance pour Mare Nostrum, 2 ans
Dans le cadre de la refonte de l'application de cooptation Linkeys, j'ai développé les modules de facturation, de visualisation des données statistiques ainsi que de la partie mobile (push notification, SSO). J'ai contribué à la mise en place d'une gestion de projet agile.
Environnement technique : React, Node, TypeORM, Redux, Git, Capacitor, Codemagic,Firebase, Stripe

2020
FullStack développeur chez Sopra Immobiler, 1 an
J'ai intégré l'équipe édition de la division R&D en charge de l'évolution de l'application de gestion immobilière Ulis. Je suis monté rapidement en compétence sur le framework interne Kernel (Java), la maitrise du langage Uniface et la complexité fonctionnelle du dommaine de l'immobilier. En charge des demandes clients, je devais élaborer une solution technique à un besoin fonctionnel et la mettre en oeuvre. Environnement technique : Java, Kernel, JSF, JDBC Oracle, Uniface, Git

2018
FullStack développeur chez Sparte, 15 mois
Au sein d'une équipe de 3 développeurs, la startup propose une solution de visites virtuelles 3D et de visualisation graphique, basé sur Angular, Node et GraphQL. Responsable de la mise en place de gestion de projet Scrum pour améliorer la communication et l'efficacité en interne. J'ai limité les coûts de fonctionnement en migrant de Google Maps à Openstreetmap. J'ai réduit les temps de chargement, en développant une solution de compression et d'intégration des modèles 3D. J'ai optimisé l'expérience utilisateur et l'ergonomie des fonctionnalités de visualisation de réseaux électriques en intégrant la librairie D3js.

2014
Ingénieur d'étude et développement chez Astek, 4 ans
Intégration au pôle R&D d'ADP pour développer une nouvelle solution de gestion de paie à forte volumétrie. Nous avons tiré partie de ces données grâce aux solutions big data et de machine learning (Hadoop, HBase). J'ai également été en charge de faire évoluer et de maintenir l'application de gestion des concours de l'ENA et de l'IRA (JSP, Hibernate, PostgreSQL). J'ai aussi participé au développement de SPA en ReactJS pour des besoins en interne.
  "
  Les compétences de Mohamed : Reactjs, nodejs, java, git.
  les compétences de Erik : Reactjs, nodejs, redux, git. 

  Mohamed est disponible à partir de mars. 
  `

}


emailjs.init({
  publicKey: 'gZmykr_ckvgC0lr78',
});

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: `Bonjour ! :) Je suis un programme d'intelligence artificielle développé par l'agence web mintset. 
Je suis conçu pour répondre à vos questions et vous aider avec vos besoins en matière de développement web et voir comment Mintset peut y répondre.  
N'hésitez pas à me demander toutes les informations dont vous avez besoin nous concernant ! Je peux aussi transmettre vos messages à freelances.`,
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message: any) => {











    console.log('nouvau message ', message);

    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages: any = [...messages, newMessage];
    setMessages(newMessages);




    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    // await createMessage(newMessages);

    try {
      const response = await fetch('/api/createMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessages),
      })
      const res = await response.json()

      setIsTyping(false);


      console.log('0000000000000000000user_email, user_message=================' );

      const messageGPT =  res.data.content

      if (messageGPT.includes('[validation_ok]') && messageGPT.includes('[[')) {
        
        const regex1 = /\[\[\[([\s\S]*?)\]\]\]/;

        console.log('111111111==========================messageGPT.match(regex1)[0],  =================',messageGPT.match(regex1));

        const user_message = messageGPT.match(regex1)[0];

        console.log('111111111==========================user_message,  =================',user_message);

        const regex = /\[\[(.*?)\]\]/;
        const user_email = messageGPT.match(regex)[0];
        console.log('111111111==========================user_email,  =================',user_email);

  


        console.log('222222222==========================user_email, user_message=================', { user_email, user_message });

        const templateParams = {
          user_name:    'MintsetAI',
          user_message:   user_message.replaceAll('[[[', ' ').replaceAll(']]]', ' '),
          user_email:user_email.replaceAll('[[', ' ').replaceAll(']]', ' '),
        };

        emailjs.send('service_ijjiqi6', 'template_m8oitcs', templateParams).then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );

        setMessages([...newMessages, {
          message: 'Je vous remercie. Le mail a bien été envoyé.',
          sender: "ChatGPT"
        }]);
      }else{
        setMessages([...newMessages, {
          message: res.data.content,
          sender: "ChatGPT"
        }]);

      }









      console.log('messages', messages);
    } catch (error) {
    }
  };



  return (
    <div className="Chatbot">
      <div className="ChatbotContainer" style={{ position: "relative", height: "400px", width: "65vw" }}>
        <MainContainer className='ChatbotMain'>
          <ChatContainer >
            <MessageList
              scrollBehavior="smooth"
            >



              {messages.map((message, i) => {
                console.log(message)
                switch (message.sender) {
                  case 'ChatGPT':
                    return (
                      <div className='itemMessage'>
                        <span className=" itemPrompt companyNamePrompt">MintsetAI</span> :~$  {message.message}
                        <div className="typing-demo">

                        </div>
                      </div>)
                  case 'user':
                    return (
                      <div className='itemMessage'>
                        <span className=" itemPrompt companyNamePrompt">Vous</span> :~$  {message.message}
                        <div className="typing-demo">

                        </div>
                      </div>)

                  default:
                    break;
                }




              })}
              <MessageInput placeholder="> écrire ici" onSend={handleSend} />
              {isTyping ? <TypingIndicator className='typer' content="MintsetAI va répondre" /> : null}
            </MessageList>


          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chatbot
