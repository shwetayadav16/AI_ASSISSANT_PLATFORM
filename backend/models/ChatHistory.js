import mongoose from mongoose;
const chatHistorySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:True
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Document',
        required:True
    },
    message:[{
        roles:{
            type:String,
            enum:['user','assisstant'],
            required:true
        },
        content:{
            type:String,
            required:true
        },
        timestamp:{
            type:Date,
            default:Date.now
        },
        relevantChunks:{
            type:[Number],
            default:[]
        }
    }]
},{
timestamp:true
})
// Index for faster queries
chatHistorySchema.index({userId:1,document:1});
const ChatHistory = mongoose.model('ChatHistory',chatHistorySchema);
export default ChatHistory;