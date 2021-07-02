import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
     id:'1', 
     title: 'Best day of my life', 
     content: 'Today i was about to leave for work when my mum called.But more often, these two things don’t align.Something feels shitty but is right/good (getting up at 5AM and going to the gym, hanging out with grandma Joanie for an afternoon and making sure she’s still breathing), or something feels fucking great but is the bad/wrong thing to do (pretty much anything involving penises). But when we do what’s good/right, the positive effects last much longer. We feel pride remembering it years later. We tell our friends and family about it and give ourselves cute little awards and put shit on our office walls and say, “Hey! I did that!” when our co-workers come in and ask why we have a trophy with a goat catching a frisbee on our bookshelf (don’t ask). You know you shouldn’t cheat on your exam, but your brain says, “You’re working two jobs to put yourself through college, unlike these spoiled brats in your class. You deserve a little boost from time-to-time,” and so you sneak a peek at your classmate’s answers and voila, what feels good is also what feels rightYou know you should vote, but you tell yourself that the system is corrupt, and besides, your vote won’t matter anyway. And so you stay home and play with your new drone that’s probably illegal to fly in your neighborhood. But fuck it, who cares? This is America and the whole point is to get fat doing whatever you want. That’s like, the sixth amendment, or something.',
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
     title: 'Life post pandemic', 
     content: 'The pandemic has taught us all a lot of things.',
     comments: [],
     author: 'Alfie Solomons',
     dp: 'https://i.imgur.com/GSmyMmh.png'
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