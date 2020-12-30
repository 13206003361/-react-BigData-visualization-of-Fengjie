import React ,{ useState, useEffect }from 'react';

import styles from './index.less';
import Home from '../components/Home/Home'
import Demo from '../components/demo/demo'
import url from '*.svg';



export default () => {
  const [Vedio, setVedio] = useState(false);

  var changeBg=(isVedio:any)=>{
      setVedio(isVedio)
  }

  return (
    <div className={Vedio?styles.container1:styles.container} >
      <Home  changeBg={changeBg}/>
      {/* <Demo/> */}
    </div>
  );
}
