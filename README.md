## what is a react hooks??
### hooks의 사용 목적
1 hooks는 component의 state machine에 연결하는 기본적인 방법이다.
2 class component보다는 function component을 권장한다.

## library
### useState
useState 라이브러리를 사용하기 위해선 다음과 같이 import해야만 합니다.      
<code>
import React {setState} from "react";
</code>

다음은 useState 라이브러리를 사용하였을때 state의 데이터를 변경하는 예제소스 입니다.    
<code>
    function ThisisFunctionComponent(){
      const [item,setItem] = useState(100);
      incrementItem = () => setState(item+1);
      decrementItem = () => setState(item-1);
      return <div>
          <h1>react hooks useState.</h1>
          <div>item number is : {item}</div>
          <button onClick={incrementItem}>incrementItem</button>
          <button onClick={decrementItem}>decrementItem</button>
          </div>
    }
</code>
<code>
    const [item,setItem] = useState(100);    
</code>
위 코드에서 item에는 useState()함수으로 주입한 데이터가 세팅됩니다. 그렇다면 setItem은 무엇인가요?    
<code>
    incrementItem = () => setState(item+1);
</code>
위 코드와 같이 state의 데이터를 변경하고자할때 호출할 수 있는 함수입니다.        
즉 useState()함수는 세팅하고자하는 데이티와 상태를 변경할 수 있는 함수을 리턴하게 됩니다.         