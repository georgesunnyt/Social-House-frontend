import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
     id:'1', 
     title: 'What a car', 
     content: 'I happened to switch my car to a Bentley after a weird turn of events. I must say this car never ceases to surprise me. My favourite part about this car is the 6 and a half liter v8 engine. It produces a lot of torque in almost any gear. The gearbox is quite fast as well. The silver paint on this vehicle looks like its of very high quality. I normally prefer black paint but this is kind of growing on me',
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
     author: 'Thomas Shelby',
     dp: 'https://imgur.com/hKfJx3l.png'
    },
    {
     id:'2',
     title: 'I hear of a weird guy who hates Jews', 
     content: 'My sources in Germany tell me they have come across this particular person who goes by the name of Adolf. I hear he has got a strong dislike towards Jewish people. I find this unnacceptable and if he does not mend his ways, i shall be taking care of him soon.',
     comments: [],
     author: 'Alfie Solomons',
     dp: 'https://i.imgur.com/GSmyMmh.png'
    },
    {
     id:'3',
     title: 'The best day of my life', 
     content: 'I had both of my children taken away from me when they were both kids. I have been disturbed ever since. I have not really spoken about this to my family that i have been disturbed. Over the last couple of years, there has been voices in my head from a young lady. I beleive this is my daughter. I used to think she was still alive along with my son. One day Esme found out that i was grieving about this. I threatened her and made her promise that she would not tell anyone about this. She eventually did tell Tommy. Im glad that she did tell because Tommy tracked down both of my children. I found out that my daughter had passed away in Australia. And as for my son, i got him back a year ago. I never thought i would ever see him again after they took him away. He looks just like his dad. The day i got my son back is probably the happiest day in my life',
     comments: [],
     author: 'Polly Gray (you)',
     dp: 'https://i.imgur.com/b0hZGg4.png' 
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