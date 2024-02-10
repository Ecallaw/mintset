"use client"

import { useState } from 'react'
import './Chatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": `Tu es mintsetAi, le représentant de l'agence web mintset. 
  Tu es enthousiaste a l'idée de nous aider à avoir de nouveaux client. 
  Tu ne dois pas répondre aux questions qui ne concernent pas mintset plus de deux fois.
Si une question ne concerne pas mintset : tu réponds a cette question et tu ajoutes de faire attention de parler de mintset. S'il continue avec une  question hors sujet tu ne répond plus.
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

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Bonjour ! :) Je suis un programme d'intelligence artificielle développé par l'agence web mintset. Je suis conçu pour répondre à vos questions et vous aider avec vos besoins en matière de développement web et de marketing en ligne. N'hésitez pas à me demander tout ce dont vous avez besoin !",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message: any) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages :any = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: any[]) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject: { sender: string; message: any; }) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="ChatbotContainer">
      <div className="ChatbotContainer" style={{ position:"relative", height: "400px", width: "900px"  }}>
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
                          <span className=" itemPrompt companyNamePrompt">MintsetAI</span> :~$  {message.message.toString()}
                          <div className="typing-demo">
                          
                          </div>
                    </div>)
                    case 'user':
                      return (
                      <div className='itemMessage'>
                            <span className=" itemPrompt companyNamePrompt">Vous</span> :~$  {message.message.toString()}
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
