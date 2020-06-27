const sgMail =  require('@sendgrid/mail')
const sendgridAPIKey =process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)



const sendWelcomeEmail =(email, name)=>{
    sgMail.send({
        to:email,
        from:'saumikpatel95@gmail.com',
        subject:'Welcome to Task-Manager',
        text:`Welcome to the app, ${name}. let me know how you get along with the app`
    },(error, succes)=>{
        if(error){
            console.log(error)
        }
    
    })
}



const deleteConfirmation =(email, name)=>{
    sgMail.send({
        to:email,
        from:'saumikpatel95@gmail.com',
        subject:'Account Deletion',
        text:`Hello ${name}. Your account has been deleted successfully.`
    },(error, succes)=>{
        if(error){
            console.log(error)
        }
    
    })
}

module.exports={
    sendWelcomeEmail,
    deleteConfirmation

} 




