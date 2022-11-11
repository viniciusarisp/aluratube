import { StyledRegisterVideo } from "./styles";
import React from "react";


function useForm(propsDoForm) {
      const [values, setValues] = React.useState(propsDoForm.initialValues);
      return {
            values,
      };
}


export default function RegisterVideo() {
      const formCadastro = useForm({initialValues:
             {titulo:"",url:""}});
      const [formVisivel, setFormVisivel] = React.useState(true);
      return (
            <StyledRegisterVideo>
                  <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
                  {formVisivel ? (
                        <form onSubmit={(evento) => {
                              evento.preventDefault();
                        }}>
                              <div>
                                    <button className="close-modal" onClick={() => setFormVisivel(false)}>X</button>
                                    <input placeholder="Título do vídeo /" value={formCadastro.values.titulo} onChange={(evento) => {
                                          const value = evento.target.value;
                                          setValues({
                                                ...values,
                                                titulo: value,

                                          });
                                    }}></input>
                                    <input 
                                    placeholder="URL /" 
                                    value={formCadastro.values.url}
onChange={(evento) => {
      const value = evento.target.value;
      setValues({
            ...values,
            url: value,

      });
}}                                    ></input>
                                    <button type="submit">Cadastrar</button>
                              </div>
                        </form>
                  ) : (
                        false
                  )}
            </StyledRegisterVideo>
      );
}
