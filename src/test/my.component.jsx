import {sayHi, sayBye} from './say';

const MyFirstComponent = () => {
  sayHi("MyFirstComponent")
  sayBye("MyFirstComponent")    
  return (
    <div>
      my first component update export
    </div>
  )
}

export default MyFirstComponent;