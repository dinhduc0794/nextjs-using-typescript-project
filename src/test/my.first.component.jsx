import { sayBye } from './test/say' // can phai de trong cap dau {} vi no la export named -> phai dat ten dung voi ten export ra
import sayHello from './test/say'   // dat ten la gi cung duoc vi no la export default -> mac dinh no tu dong export ra sayHi

const MyFirstComponent = () => {
  sayHello  ("Dinh Duc")
  sayBye("Dinh Duc")
  return (
    <div>
      <h1>My First Component</h1>
      <p>Update export</p>
    </div>
  )
}

export default MyFirstComponent
