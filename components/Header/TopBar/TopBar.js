import {Container, Grid, Image, Input }from"semantic-ui-react";
import Link from "next/link"
export default function TopBar() {
  return (
    <div className="top-bar">
     <Container>
        <Grid className= "top-bar">
          <Grid.Column width={8} className ="top-bar__left">
            <Logo/>
          </Grid.Column>
          <Grid.Column width={8} ClassName="top-bar__rigth">
            <Search/>
            </Grid.Column> 
        </Grid>
     </Container>
    </div>
  )
}


function Logo(){
    return(
        <Link href="/">
    
        <Image src ="/logoBlanco.png" alt= "Perfume"/>
       
        </Link>
    )
}

function Search(){
 return (
  <Input
    id="search-game"
    icon={{name:"search"}}
    />
 )
}