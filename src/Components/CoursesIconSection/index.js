import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaAws,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const items = [
  {
    id: 1,
    icon: "https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png"
  },
  {
    id: 2,
    icon: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
  },
  {
    id: 3,
    icon: "https://cdn3d.iconscout.com/3d/free/thumb/vuejs-4387636-3640297.png",
  },
  {
    id: 4,
    icon:"https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png",
  },
  {
    id: 5,
    icon:"https://raw.githubusercontent.com/ijsto/reactnextjssnippets/master/images/logo02.png",
  },
  {
    id: 6,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  },
];

function CoursesICon() {
  return (
    <section id="cliens" className="cliens section-bg shadow-sm">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          {items.map((key) => (
            <>
              <div
                key={key}
                className="frmeIcon col-lg-2 col-md-4 col-4 d-flex align-items-center justify-content-center "
              >
          <img src={key.icon}/>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesICon;
