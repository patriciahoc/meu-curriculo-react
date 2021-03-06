import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

function Contatos() {
  return (
    <div className="lista-de-contatos">
      <li>
        <div className="item-contato">
          <h4>Telefone</h4>

          <a
            href="https://api.whatsapp.com/send?phone=55+19+91149390"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ size: "1em" }}>
              <FaWhatsapp />
            </IconContext.Provider>
            (19) 99114 9390
          </a>

          <h4>E-mail</h4>
          <p>
            <a
              href="mailto:patriciahedra@gmailcom"
              target="_blank"
              rel="noreferrer"
            >
              patriciahedra@gmail.com
            </a>
          </p>
          <h4>
            <a
              href="https://www.linkedin.com/in/patriciahedra/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h4>
          <h4>
            <a
              href="https://github.com/patriciahoc"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </h4>
        </div>
      </li>
    </div>
  );
}

export default Contatos;
