const messages = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        // console.log(req.body)
        const {text, time} = req.body
        let message = {
            id,
            text, 
            time
        }
        messages.push(message)
        id++;
        // console.log(messages, id)
        res.status(200).send(messages)
    },
    update: (req, res) => {

        let {id} = req.params;
        let messageObj = messages.find(message => +id === message.id)
        messageObj = {
            id: messageObj.id,
            text: req.body.text || messageObj.text,
            time: req.body.time || messageObj.time
        }
        console.log(messageObj)
        let index = messages.findIndex(message => message.id === messageObj.id);
        messages.splice(index, 1, messageObj);
        console.log(messages)
        res.status(200).send(messages)
        
        },
        delete: (req, res) => {
            let {id} = req.params;
            let index = messages.findIndex(message => +id === message.id);
            messages.splice(index, 1);
            res.status(200).send(messages);
        }
    
    }
