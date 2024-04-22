import { useEffect , useState} from 'react';
import { Plus } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("http://localhost:5000/posts/get");
      console.log(res?.data?.postMessages);
      setPosts(res?.data?.postMessages)
    }
    fetchPosts();
  }, [])

  const getLatestPosts = async() => {
    const res = await axios.get("http://localhost:5000/posts/latest");
    console.log(res?.data?.postMessages);
    setPosts(res?.data?.postMessages);
  }


  return (
    <main className='min-h-screen w-full flex flex-col'>
      <div className="w-full h-[20vh] flex justify-between bg-slate-200 items-center">
        <div className="text-4xl font-bold italic pl-10">Socio-Media</div>
        <Link to='/create'>
        <div className="flex h-[7vh] w-[22vh] bg-black text-white justify-center items-center mr-16 rounded-md text-lg gap-1 tracking-wide pr-2 cursor-pointer hover:bg-slate-800"><Plus />Create a Post</div>
        </Link>
      </div>
      <div className="h-[10vh] w-full flex justify-center items-center">
        <div className="h-full w-[90%] flex gap-10 tracking-wider items-center">
          <div className="text-lg font-semibold hover:underline-offset-0 cursor-pointer">Feed</div>
          <div className="text-lg font-semibold cursor-pointer" onClick={getLatestPosts}>Latest</div>
        </div>
      </div>
      <div className="min-h-screen w-full grid grid-cols-3 p-20">
        {
          posts.length ? (
            posts.map((post, index) => {
              return (
                <div key={index} className="h-[40vh] w-[42vh] bg-slate-200 m-5 rounded-md flex flex-col gap-5 mb-20">
                  <div className="h-[20vh] w-full bg-black rounded-t-md">
                    <img src={post.imageUrl} alt="post" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-[10vh] w-full p-5">
                    <div className="font-bold text-lg">{post.description}</div>
                    <div className="text-sm">{post.createdAt}</div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-2xl font-bold">No posts yet</div>
          )
        }
      </div>
    </main>
  )
}

export default Home
