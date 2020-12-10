import React from 'react'
import styled from 'styled-components'

const NewsletterStyled = styled.div` 
padding: 16px;
color: white;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607492757/taby/PosterVenta_6_aivwfr.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 1/span 2;
p{
    font-size:32px;
    font-weight: bold;
    text-align:center;
    margin-bottom: 20px;
}

form{
    display: flex;
    flex-direction: row;

    input{
        background-color: transparent; 
        width: 240px;
        color: black;
        border: 1px solid white;
        height: 24px;
        margin-right: 8px;
        padding: 4px;
        &::placeholder{
            color: white;
            text-transform: uppercase;
            padding: 4px;
            }
        }

        button{
            background-color: #FF465C;
            border: 1px solid #FF465C;
            padding: 4px;
        }
}

@media(max-width:900px){
    
}

@media(max-width:750px){
    margin-bottom: 40px;
    
    p{
        font-size: 24px;
    }
}

@media(max-width:500px){

    form{

        padding: 8px;

      input{
          width: 200px;
          &::placeholder{
              font-size: 12px;
          }
      }

      button{
          font-size:12px;
      }
    }

}

@media(max-width: 410px){
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
            margin-right: 0;
            margin-bottom: 8px;
        }

        button{ 
            width: 200px;
        }
    }
}
`

function Newsletter() {
    return (
        <NewsletterStyled>
            <p>La realidad es borrada mientras cruzamos a través de ella.</p>
            <form action="https://promesasalamuerte.us7.list-manage.com/subscribe/post?u=807657be96c47620ca8cfa839&amp;id=0be6f260c5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                <input  type="email"  id="mce-EMAIL" placeholder="DESCARGA LA PRIMERA PARTE"/>
                <button type="submit" id="mc-embedded-subscribe">SUSCRÍBETE</button>
            </form>



            {/* <!-- Begin Mailchimp Signup Form -->

<div id="mc_embed_signup">
    <form action="https://promesasalamuerte.us7.list-manage.com/subscribe/post?u=807657be96c47620ca8cfa839&amp;id=0be6f260c5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_807657be96c47620ca8cfa839_0be6f260c5" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
</div>

    <!--End mc_embed_signup-->
</div> */}
            
        </NewsletterStyled>
    )
}

export default Newsletter
