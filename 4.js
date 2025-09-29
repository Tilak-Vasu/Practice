// Data Transformer: maken dataset (e.g., posts) and filter/sort it using map/filter/reduce.

const posts = 
[
  {
    "id": 1,
    "title": "Understanding JavaScript Closures",
    "content": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    "author": "John Doe",
    "date": "2025-09-25T08:00:00Z",
    "category": "Programming",
    "likes": 100,
    "comments": 5
  },  {
    "id": 5,
    "title": "Exploring Python for Data Science",
    "content": "Python is the go-to language for data science. Libraries like Pandas and NumPy make data manipulation easy and efficient.",
    "author": "Eve Davis",
    "date": "2025-09-23T16:00:00Z",
    "category": "Data Science",
    "likes": 250,
    "comments": 20
  },
  {
    "id": 2,
    "title": "The Basics of React",
    "content": "React is a powerful JavaScript library for building user interfaces. It allows you to build complex UIs from small, reusable components.",
    "author": "Jane Smith",
    "date": "2025-09-24T14:30:00Z",
    "category": "Web Development",
    "likes": 200,
    "comments": 15
  },
  {
    "id": 3,
    "title": "Machine Learning in JavaScript",
    "content": "Machine learning is an exciting field. JavaScript libraries like TensorFlow.js make it possible to run machine learning models in the browser.",
    "author": "Alice Johnson",
    "date": "2025-09-20T10:00:00Z",
    "category": "AI & ML",
    "likes": 150,
    "comments": 8
  },
  {
    "id": 4,
    "title": "Mastering CSS Grid",
    "content": "CSS Grid is a two-dimensional layout system for the web. It helps create complex layouts more easily and efficiently.",
    "author": "Bob Brown",
    "date": "2025-09-22T12:45:00Z",
    "category": "Web Development",
    "likes": 80,
    "comments": 3
  }
]

console.log("using the map method")

// filter/sort it using map/filter/reduce.

const like = parseInt(prompt("Enter least amount of liked product u need : "));
const postLiked = posts
.filter(i=>id.likes >= like)
.sort((a,b)=>a.id-b.id)
.map(post=>({
    id : post.id,
    author :  post.author,
    category : post.category,
    likes : post.likes
}))
console.log(post)

console.log("using the reduce method")

const postlikedWithReduce =  posts.reduce((a,b)=>{
    let inserted = false ;
    for (let i = 0; i < a.length; i++) {
        if (b.likes > acc[i].likes) {

            a.splice(i, 0, b);
            inserted = true;
            break;
    }
    }
      return a;

},[]);

console.log(postlikedWithReduce);
