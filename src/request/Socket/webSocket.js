export function useWebSocket(handleMessage){
    const ws = new WebSocket('ws://localhost:8080');

    const init = ()=>{
        bindEvent();
    }

    function bindEvent(){
        ws.addEventListener('open',handleOpen,false);
        ws.addEventListener('open',handleClose,false);
        ws.addEventListener('open',handleError,false);
        ws.addEventListener('open',handleMessage,false);
    }

    function handleOpen(e){

    }
    function handleClose(e){

    }
    function handleError(e){

    }

    init();
    
    return ws;
}