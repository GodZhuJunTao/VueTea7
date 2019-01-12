import axios from 'axios';

export default new Promise((resolve,reject)=>{
    axios.get('./mock/categoryCompleteList.json').then(res=>{
        let data = res.data;
        let categroies = data;
        resolve(categroies);
    })
});