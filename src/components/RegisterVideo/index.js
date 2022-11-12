import { StyledRegisterVideo } from "./styles";
import React from "react";
import { createClient } from "@supabase/supabase-js";

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}


// CUSTOM HOOK


function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        },
    };
}

const PROJECT_URL = "https://smdoispptwkghywnauai.supabase.co";
const PUBLIC_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZG9pc3BwdHdrZ2h5d25hdWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjI3MzUsImV4cCI6MTk4MzgzODczNX0.2lZXr8TFGFZ5fVMLdcIIxnm85PfeNHi3imahqyHO7Kk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);



export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {
            titulo: "Joji - Glimpse of Us",
            url: "https://www.youtube.com/watch?v=FvOpPeKSf_4",
        },
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form
                    onSubmit={(evento) => {
                        evento.preventDefault();

                        supabase.from("video").insert({
                                title: formCadastro.values.titulo,
                                url: formCadastro.values.url,
                                thumb: getThumbnail(formCadastro.values.url),
                                playlist: "jogos",
                            })
                            .then((oqueveio) => {
                                console.log(oqueveio);
                            })
                            .catch((err) => {
                                console.log(err);
                            });

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}
                >
                    <div>
                        <button
                            className="close-modal"
                            onClick={() => setFormVisivel(false)}
                            type="button"
                        >
                            X
                        </button>
                        <input
                            placeholder="Título do vídeo /"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        ></input>
                        <input
                            placeholder="URL /"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        ></input>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ) : (
                false
            )}
        </StyledRegisterVideo>
    );
}
