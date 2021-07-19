import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
     id:'1', 
     title: 'What a car', 
     content: 'I happened to switch my car to a Bentley after a weird turn of events. I must say this car never ceases to surprise me. My favourite part about this car is the 6 and a half liter v8 engine. It produces a lot of torque in almost any gear. The gearbox is quite fast as well. The silver paint on this vehicle looks like its of very high quality. I normally prefer black paint but this is kind of growing on me',
     comments: [],
     author: 'Thomas Shelby',
     dp: 'https://imgur.com/hKfJx3l.png'
    },
    {
     id:'2',
     title: 'Expanding into London', 
     content: 'The Shelby Limited has opened up a pub in London which goes by the name of Shelby Pubs. Do drop by ladies and gentleman',
     comments: [],
     author: 'Polly Gray (you)',
     dp: 'https://i.imgur.com/b0hZGg4.png' 
    },
    {
     id:'3',
     title: 'I hear of a weird guy who hates Jews', 
     content: 'My sources in Germany tell me they have come across this particular person who goes by the name of Adolf. I hear he has got a strong dislike towards Jewish people. I find this unnacceptable and if he does not mend his ways, i shall be taking care of him soon.',
     comments: [],
     author: 'Alfie Solomons',
     dp: 'https://i.imgur.com/GSmyMmh.png'
    },
    {
     id:'4',
     title: 'Christmas giveaways', 
     content: 'As a part of our upcoming Christmans giveaway contests, we will be announcing the winners of 3 cars that will be given away by the Shelby Motor Corporation',
     comments: [],
     author: 'Polly Gray (you)',
     dp: 'https://i.imgur.com/b0hZGg4.png' 
    },
    {
     id:'5',
     title:'The Shelby Foundation',
     content: 'I am pleased to announce that the Shelby Company Limited has decided to start a foundation for taking care of poor children. We will be having a grand ceremony for its opening in the coming days.',
     comments:[
         {
             comment: 'Cant wait for the inaugration ceremony',
             author:'Grace Shelby',
             dp:'https://i.imgur.com/A5Xkq4W.jpeg'
         }
     ],
     author: 'Thomas Shelby',
     dp: 'https://imgur.com/hKfJx3l.png'   
    },
    {
     id: '6',
     title: 'If anyones looking for a magnificent painter',
     content: 'I happen to know  a painter by the name of Ruben who is really good at painting portraits. I dont think he is getting the kind of attention that his work deserves. If any of you are looking for a painter of this sort, please do get in touch with me',
     comments:[],
     author: 'Polly Gray (you)',
     dp: 'https://i.imgur.com/b0hZGg4.png'
    },
    {
     id: '7',
     title: 'Party at the Garrisons tonight',
     content: 'My wifes pregnant and i want all you boys and girls to join us at the Garrisons tonight. Drinks on us. By order of the Peaky Blinders',
     comments:[],
     author: 'Arthur Shelby',
     dp:'https://i.imgur.com/QYlwubq.png'
    },
    {
     id:'8',
     title: 'The best day of my life', 
     content: 'I had both of my children taken away from me when they were both kids. I have been disturbed ever since. I have not really spoken about this to my family that i have been disturbed. Over the last couple of years, there has been voices in my head from a young lady. I beleive this is my daughter. I used to think she was still alive along with my son. One day Esme found out that i was grieving about this. I threatened her and made her promise that she would not tell anyone about this. She eventually did tell Tommy. Im glad that she did tell because Tommy tracked down both of my children. I found out that my daughter had passed away in Australia. And as for my son, i got him back a year ago. I never thought i would ever see him again after they took him away. He looks just like his dad. The day i got my son back is probably the happiest day in my life',
     comments: [
        {
            comment: 'very touching story',
            author: 'Arthur Shelby',
            dp:'https://i.imgur.com/QYlwubq.png'
         },   
         {
            comment: 'what a beautiful read',
            author: 'Ada Thorne',
            dp:'https://i.imgur.com/0Cr5dq1.png' 
         }
     ],
     author: 'Polly Gray (you)',
     dp: 'https://i.imgur.com/b0hZGg4.png' 
    },
    {
     id: '9',
     title: 'Cleaning the streets',
     content: 'I assure the people of Birmingham that every illegal and corrupt activity will be wiped away from these soon. Nowone is above the law, not even the peaky blinders',
     comments:[],
     author: 'Inspector Campbell',
     dp: 'https://i.imgur.com/KOcJzKi.jpeg'
    }

]

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        },
        commentAdded(state, action) {
            const{id, commentObject} = action.payload;
            const post = state.find(post=>post.id===id);
            if(post){
                post.comments.push(commentObject);
            }
        }
    }
})
export const {postAdded, commentAdded} = postsSlice.actions;
export default postsSlice.reducer;