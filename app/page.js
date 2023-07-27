'use client'

import React, {useEffect} from 'react';
import Image from 'next/image';
import Logo from '@/elements/Logo/Logo';
import styles from './page.module.css'
import { useWindowSize } from '@/hook/useWindowSize';
import photodeprofil from '@/public/photo.png'
import iconCV from '@/public/cv.png'

const About = () => {

    const size = useWindowSize();
    let vh = size.height * 0.01;
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Check if running in a browser environment
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    }, [vh]);

    return (

      <main className={styles.layout}>

        <div className={styles.columnContainer}>

          <div className={styles.columnLeft}>


            <div className={styles.presentation}>
              <p>Im a full stack developer</p>
            </div>
            
            <div className={styles.profilePicture}>
            
            </div>

            <div className={styles.cv}>
              <p>Mon CV</p>
              <a href={iconCV} download={true} className={styles.CVlink}></a>
            </div>
            
            

          </div>

          <div className={styles.columnRight}>
          <div className={styles.logo}>
              <Logo darkMode={true}/>
            </div>
            <div className={styles.aboutMe}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste tempora odio natus ex voluptas velit, ea quos perspiciatis minus repellendus mollitia necessitatibus optio dolorem error harum corporis nihil odit quo eius facere. Sint velit laborum, commodi iste laudantium, quos aspernatur enim et alias quam veniam ipsam nostrum quod accusantium est fuga sapiente nemo cum tempore itaque distinctio delectus unde. Commodi, earum cumque quas sequi suscipit nobis, inventore voluptatibus id libero possimus, adipisci unde deserunt. Voluptate non ad ipsa repudiandae fugit numquam, labore illo perferendis atque, eligendi voluptatem quia! Dolorum soluta illo, quisquam debitis molestias aliquam nostrum ut asperiores est et rerum harum mollitia consequuntur, magnam aspernatur nemo impedit suscipit quasi corporis aut nihil veritatis? Laboriosam exercitationem, repellendus neque repellat earum commodi hic, natus temporibus sapiente vitae ea cumque molestiae ipsa aut illum in inventore officiis. Quia delectus debitis dignissimos doloribus nesciunt, explicabo iusto dolor facere beatae quam vitae perspiciatis quibusdam eum quo. Inventore odio, nihil libero quae consequuntur blanditiis maiores velit temporibus aspernatur. Quo ex corporis id quae non cupiditate aliquid quia. Saepe atque aut voluptate libero exercitationem. Quisquam blanditiis quas tenetur, ex quidem amet debitis delectus corporis laboriosam? Iusto officia nihil ipsam quisquam hic voluptas! Cupiditate tenetur quos error nihil vero! Molestias ab praesentium facilis quo odit vitae ipsum doloribus dolorem! Ratione exercitationem odit in possimus eveniet! Eligendi est expedita quam repellendus veniam nihil voluptatem aut quo earum ab! Velit sit voluptate tenetur facere assumenda, architecto aliquid deleniti similique expedita id consectetur unde, ea debitis magni. Sed temporibus doloremque reprehenderit velit aut voluptatum dolores? Reiciendis quas labore sed illo cum voluptas quibusdam hic eius in id, fugit maiores! Dolores, sequi? Non quis inventore eius sint tenetur qui nam placeat culpa sit voluptas est dignissimos quasi, doloribus cumque illo voluptates quisquam natus ex veniam quidem nemo in dicta? Error quasi, expedita culpa itaque corrupti odio fugiat quas dignissimos nihil, sapiente ipsum eligendi amet ipsa voluptatem commodi placeat accusamus voluptate natus nam ducimus adipisci eius tempora consequatur. Nobis rem adipisci magni perspiciatis ratione incidunt eveniet iusto, obcaecati illo aliquam accusantium, dolorem delectus cumque exercitationem, unde neque reiciendis soluta distinctio. Debitis earum voluptates quisquam tempore mollitia et incidunt vitae id, aliquid adipisci dolorum quia ullam accusantium perferendis harum itaque odio molestiae. Ea ex maxime facere quasi, ad maiores atque corporis quidem dolore nulla neque id et doloremque, exercitationem quam reiciendis commodi tempora, labore fugit dolorem voluptatibus perferendis consectetur blanditiis! Quidem ea velit accusantium pariatur repellendus illum, quaerat temporibus voluptatibus, in culpa omnis deleniti suscipit beatae minima ex a itaque maxime, eos alias. Repellat, quibusdam ullam. Accusamus voluptatum ipsam optio et iusto maxime impedit quam excepturi ex necessitatibus, culpa libero, inventore voluptates nulla cupiditate, sequi reprehenderit. Sapiente deserunt sequi, fuga dignissimos facilis fugit delectus quis obcaecati dicta molestias rem laboriosam et illum quam omnis, magnam amet repudiandae soluta quia ducimus excepturi eius eligendi officiis! Veniam accusantium quas ipsum aperiam dolorum unde rerum accusamus quasi facilis? Necessitatibus accusamus ipsum delectus, consequuntur repellendus aliquid omnis, saepe consectetur, dignissimos eligendi doloribus nesciunt in sint modi?
            </div>
            

          </div>

        </div>

        <div className={styles.bandeau}></div>

      </main>     
    );
};

export default About;