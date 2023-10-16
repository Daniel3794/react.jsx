import React from "react";
import "./FriendModal.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <html>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar component={Box} width="100%">
            <Typography variant="h2" className={classes.title}>
              EDL
            </Typography>
            <Box display="flex" width="100%" justifyContent="flex-end">
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <div className="ui">
        <div className="left-menu">
          <menu className="list-friends">
            <li>
              <img
                width="50"
                height="50"
                src="http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg"
              />
              <div className="info">
                <div className="user">Юния Гапонович</div>
                <div className="status on"> online</div>
              </div>
            </li>
          </menu>
        </div>
        <div className="chat">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nostrum
          in non consequatur, aspernatur officiis excepturi rem officia sint
          expedita perspiciatis, est voluptas facilis aut corrupti dicta iure
          odio quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Est doloribus temporibus, expedita at tenetur dolores magnam
          consequuntur nemo voluptas sit officia? Aut quidem, nostrum ad autem
          nemo mollitia hic aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui est, hic iusto accusantium laudantium obcaecati
          dignissimos pariatur, blanditiis dolore ipsum corporis quam
          voluptatem, quos suscipit ea id mollitia quibusdam atque. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Accusamus illum culpa,
          molestias a quos, neque dolorem tempora aliquid nostrum consequatur
          ipsam excepturi odit. Dicta sint voluptatum nihil dolor repellendus
          consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eius ullam, dolores incidunt distinctio cumque totam sit, sed
          veritatis minus numquam assumenda expedita obcaecati non commodi vel
          est tenetur laboriosam neque. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolor ea quos, vel ipsa sapiente beatae harum
          dolorum tempora aliquam excepturi modi repellendus voluptatibus
          doloremque asperiores eos nulla aspernatur similique nemo? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Necessitatibus iure sit
          ducimus modi placeat cumque quaerat excepturi maxime, veritatis
          voluptate veniam dolore aliquid sed aspernatur, quisquam aperiam nihil
          animi fugiat! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quia debitis accusamus consequuntur iusto deserunt nisi illo
          voluptas vero aspernatur autem eligendi ab ipsa aliquam, adipisci ea,
          aliquid nam fugit magnam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus aut odio qui accusantium alias doloribus
          expedita repellendus. Voluptate corporis porro ipsa debitis, tempora
          perspiciatis nisi et dolorem exercitationem. Totam, eligendi? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat soluta
          quo asperiores accusamus quae consectetur repellat voluptatem
          assumenda libero. Similique, voluptate facilis! Tempora quasi harum
          aspernatur incidunt? Alias, temporibus. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dicta commodi et, unde consequatur
          doloribus iusto tempore ipsa totam odio ut consectetur pariatur,
          aperiam tempora quasi odit nulla quaerat corrupti aliquid! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Eum nostrum in non
          consequatur, aspernatur officiis excepturi rem officia sint expedita
          perspiciatis, est voluptas facilis aut corrupti dicta iure odio quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus
          temporibus, expedita at tenetur dolores magnam consequuntur nemo
          voluptas sit officia? Aut quidem, nostrum ad autem nemo mollitia hic
          aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          est, hic iusto accusantium laudantium obcaecati dignissimos pariatur,
          blanditiis dolore ipsum corporis quam voluptatem, quos suscipit ea id
          mollitia quibusdam atque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus illum culpa, molestias a quos, neque
          dolorem tempora aliquid nostrum consequatur ipsam excepturi odit.
          Dicta sint voluptatum nihil dolor repellendus consectetur. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Eius ullam, dolores
          incidunt distinctio cumque totam sit, sed veritatis minus numquam
          assumenda expedita obcaecati non commodi vel est tenetur laboriosam
          neque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          ea quos, vel ipsa sapiente beatae harum dolorum tempora aliquam
          excepturi modi repellendus voluptatibus doloremque asperiores eos
          nulla aspernatur similique nemo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus iure sit ducimus modi
          placeat cumque quaerat excepturi maxime, veritatis voluptate veniam
          dolore aliquid sed aspernatur, qui adipisicing elit. Eius ullam,
          dolores incidunt distinctio cumque totam sit, sed veritatis minus
          numquam assumenda expedita obcaecati non commodi vel est tenetur
          laboriosam neque. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Dolor ea quos, vel ipsa sapiente beatae harum dolorum tempora
          aliquam excepturi modi repellendus voluptatibus doloremque asperiores
          eos nulla aspernatur similique nemo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus iure sit ducimus modi
          placeat cumque quaerat excepturi maxime, veritatis voluptate veniam
          dolore aliquid sed aspernatur, qui adipisicing elit. Eius ullam,
          dolores incidunt distinctio cumque totam sit, sed veritatis minus
          numquam assumenda expedita obcaecati non commodi vel est tenetur
          laboriosam neque. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Dolor ea quos, vel ipsa sapiente beatae harum dolorum tempora
          aliquam excepturi modi repellendus voluptatibus doloremque asperiores
          eos nulla aspernatur similique nemo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus iure sit ducimus modi
          placeat cumque quaerat excepturi maxime, veritatis voluptate veniam
          dolore aliquid sed aspernatur, qui
        </div>
      </div>
    </html>
  );
}

export default App;
