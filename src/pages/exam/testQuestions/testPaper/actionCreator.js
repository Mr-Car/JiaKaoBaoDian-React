import { TEST_PAGE_ORDER,TEST_PAGE_SIMULATEEXAM,TEST_PAGE_ALLSIMULATE, SELECTOPTION } from './actionTypes'

const syncLoadData = (type,list) => ({
  type,
  list
})

const asyncLoadData = (type) => {
  return (dispatch) => {
    let url=""
    switch(type){
      case TEST_PAGE_ORDER: url="https://api.myjson.com/bins/10lkzb";break;
      case TEST_PAGE_SIMULATEEXAM: url=" https://api.myjson.com/bins/b7wxf";break;
      case TEST_PAGE_ALLSIMULATE: url="https://api.myjson.com/bins/17fgr7" ;break;
      default : url="https://api.myjson.com/bins/zpkz3";
    }
    console.log("我发送了请求,类型是：",type)
    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch(syncLoadData(type,result.data))
      })
  }
}

const selected = (type, info) => {
  let didHistory = localStorage.getItem('didHistory')?JSON.parse(localStorage.getItem('didHistory')):{}
  let errorHistory = localStorage.getItem('errorHistory')?JSON.parse(localStorage.getItem('errorHistory')):{}
  return (dispatch) => {
    switch(type){
      case 'true' : 
        console.log("回答征",info);
        didHistory[info.id]=info
        localStorage.setItem('didHistory',JSON.stringify(didHistory));
        // dispatch('true',{
        //   id:info.id
        // })
        break;
      case 'false' :
        console.log("错了",info);
        errorHistory[info.id]=info
        localStorage.setItem('errorHistory',JSON.stringify(errorHistory));
        break;
    }
  }
}


export {
  asyncLoadData,
  selected
}