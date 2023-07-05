let output=document.getElementById('screen')
        function demo(val){
            document.getElementById('screen').value +=val
        }
        function demo1(){
            document.getElementById('screen').value=eval(document.getElementById('screen').value)
        }
        function clr(){
            output.value="";
        }
        function del(){
            output.value=output.value.slice(0,-1);
        }