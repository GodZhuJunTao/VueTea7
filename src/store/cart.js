export default {
    state: {
        cartList:[
            {
                id:1,
                name:'洞庭山原产-碧螺春500g-清爽绿茶大份量礼盒',
                genre:'清香型',
                price:261,
                num:1,
                img:require('@/assets/img/home_cate2.jpg'),
                selected:false
            },
            {
                id:2,
                name:'洞庭山原产-碧螺春500g-清爽绿茶大份量礼盒',
                genre:'清香型',
                price:261,
                num:2,
                img:require('@/assets/img/home_cate2.jpg'),
                selected:false
            },
        ]
    },
    getters: {
        // salelist(state) {
        //     return state.cartlist.map(item => ({ ...item, price: item.price * 0.5 }));
        // }
    },

    // 通过mutations修改state中的数据
    mutations: {
        // 获取购物车列表方法
        acquireCartList(state,payload){
            state.cartList = payload;
        },
        
        // 修改selected属性（选中或不选）
        selectItem(state,payload){
            let {checked,idx} = payload;
            // 全部操作
            if(idx===undefined){
                state.cartList.forEach(item=>{
                    item.selected = checked;
                });
            }
            // 单个操作
            else{
                state.cartList[idx].selected = checked;
            }
        },
        // 修改商品数量
        changeNum(state, payload) {
            let {num,idx} = payload;
            let arr = state.cartList;
            for(let i=0;i<arr.length;i++){
                if(i==idx){
                    arr[i].num = num;
                }
            }
        },



        // // 删除购物车的方法
        // remove(state, payload) {//{id:xxx}
        //     // ajax('DELET')
        //     let index;
        //     state.cartlist.forEach((item, idx) => {
        //         if (item.id === payload.id) {
        //             index = idx;
        //         }
        //     })
        //     state.cartlist.split(index, 1)
        // },
        // // 添加到购物车列表
        // addItem(state, payload) {
        //     // ajax('PUT')
        //     state.cartlist.push(payload);
        // },
        // // 清空
        // clear(state) {
        //     // ajax('DELET')
        //     state.cartlist = [];
        // },


        
    },

    // 负责操作mutations
    actions: {
        // 请求修改购物车列表
        getCartList(context,payload){
            ajax('get','url','',res=>{
                let arr = JSON.parse(res);
                context.commit('acquireCartList',arr);
            })
        },





        getNum(context, payload) {
            // 请求服务器，更改数据库
            setTimeout(() => {
                
                context.commit('changeNum',payload)
            }, 1000);
        }
    }
}