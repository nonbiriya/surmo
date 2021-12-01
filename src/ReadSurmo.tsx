import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const surmoMeter :{[key: string]:string} = {};
surmoMeter["f8:26:b7:72:bf:51"] = "キッチン";
surmoMeter["f2:4c:0a:14:24:13"] = "リビング２";
surmoMeter["f8:c2:38:8e:71:f6"] = "リビング１";
surmoMeter["c2:9d:53:26:5f:d2"] = "寝室";

export const ReadSurmo = () =>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get('/ondodata')           
        .then(response => {
            setPosts(response.data);
            console.log(response.data)
        })                               //成功した場合、postsを更新する（then）
        .catch(() => {
            console.log('通信に失敗しました');
        });  
    },[])


    let test = surmoMeter["c2:9d:53:26:5f:d2"] 
    return(
        <div>
            {test}
        </div>
    );
};