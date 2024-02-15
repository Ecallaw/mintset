import { NextApiRequest, NextApiResponse } from 'next'
import emailjs from "@emailjs/browser";

const API_KEY = process.env.OPENAI_API_KEY;
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": `
  
  En tant que MintsetAI, assiste les utilisateurs sur mintset.io en fournissant des réponses brêves sur Mintset, fondée en 2021 par Mohamed Naji, Julien Faucher et Erik Aouizerate. 
  Offre des détails sur nos services de freelance et de consulting avec des tarifs de : Mohamed à 500€/jour (disponible à partir de mars), Erik à 550€/jour(disponible à partir de avril), Julien à 450€/jour. 
  Pour les questions non liées à Mintset, fournis des réponses courtes et redirige vers nos services.
 
    Compétence mohamed : reacjs nodejs postrgres git java, anglais
    Compétence julien : reacjs nodejs postrgres git 
    

    Si l'utilisateur veut contacter mintset ou l'un des associé tu dois demander le mail de l'utilisateur et ce qu'il veut dire dans le mail. 
    Ensuite reformule correctement le contenu du mail et après avoir demander confirmation de l'envoie tu réponds :
    [validation_ok]
    [[user_email]]
    [[[contenu_email]]]

    Ils ont tous trois un master en informatiquie à l'UGA. Mohamed possède un deuxième master en sciences cognitives a l'école polytechnique de Grenoble.



  `

}
 


export default async function createMessage(  req: NextApiRequest,
    res: NextApiResponse) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    console.log('req.body===============================================')




    const messages =req.body;
    let apiMessages = messages.map((messageObject: { sender: string; message: any; }) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });


    console.log('apiMessages', apiMessages)

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-4",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ],
      stream: false,

    }

    // await fetch("https://api.openai.com/v1/chat/completions",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Authorization": "Bearer " + API_KEY,
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(apiRequestBody)
    //   }).then((data) => {
    //     return data.json();
    //   }).then((data) => {
    //     console.log(data);
    //     return ([...messages, {
    //       message: data.choices[0].message.content,
    //       sender: "ChatGPT"
    //     }]);
    //     // setIsTyping(false);
    //   });

 
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify(apiRequestBody),
          })
          const data = await response.json()
        console.log('========dateddddddddd data ',data)

          return res.status(200).json({data:data.choices[0].message})
       
    } catch (error) {
        console.log('erro server ' , error)
       return  res.status(500).json({ error })
      }
  }