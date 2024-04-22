import React, {useState} from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "../firebase/firebaseConfig";
import { v4 } from "uuid";
import { PenLine } from "lucide-react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();
    const [description, setDescription] = useState("");
    const [profilePic, setProfilePic] = useState("");

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imgref = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgref, selectedFile).then((value) => {
        console.log("image uploaded", value);
        toast.success("Image uploaded successfully");
        getDownloadURL(value.ref).then((url) => {
          console.log("url", url);
          setProfilePic(url);
        });
      });
    } else {
      console.log("no file selected");
    }
  };

const handlePostUpload = async() => { 

    if(!profilePic || !description) {
        return toast.error("Please fill all the fields");
    }
    const res = await axios.post("http://localhost:5000/posts/create", {
        imageUrl: profilePic,
        description: description,
    });
    console.log(res?.data?.newPost);
    toast.success("Post uploaded successfully");
    navigate('/');
};

  return (
    <main className="min-h-screen w-full flex flex-col">
      <div className="h-[20vh] w-full text-4xl flex font-bold p-20">
        Create your Post
        <PenLine className="realtive ml-5 mt-2 size-8" />
      </div>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="h-[55vh] w-[50%] bg-slate-200 ml-20 mb-40 rounded-md flex flex-col gap-7">
          <div className="min-h-[15vh] w-full flex gap-5 justify-center items-center">
            <div className="font-bold text-lg">Upload Image</div>
            <input type="file" onChange={handleFileUpload} />
          </div>
          <div className="min-h-[10vh] w-full flex justify-center items-center flex-col gap-3">
            <div className="font-bold text-lg">Give a description</div>
            <textarea
              type="text"
              placeholder="A trip to hawaii"
              className="p-2 rounded-md w-[55%]"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="bg-black text-white h-[4vh] w-[20vh] p-6 flex justify-center items-center rounded-md tracking-wide" onClick={handlePostUpload}>Upload Post</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatePost;
