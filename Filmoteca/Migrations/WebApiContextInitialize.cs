using Filmoteca.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Filmoteca.Migrations
{
    public class WebApiContextInitialize : DropCreateDatabaseAlways<FilmotecaContext>
    {
        
        protected override void Seed(FilmotecaContext context)
        {
            var filmes = new List<Filme>
            {
                 new Filme() { Titulo = "Star Wars", AnoLancamento = 2016, Duracao = 170 },
                 new Filme() { Titulo = "Casino Royale ", AnoLancamento = 2006, Duracao = 121 },
                 new Filme() { Titulo = "Riddick", AnoLancamento = 2004, Duracao = 130 },
                 new Filme() { Titulo = "Identidade Bourne", AnoLancamento = 2002, Duracao = 110 },
                 new Filme() { Titulo = "A Ilha", AnoLancamento = 2005, Duracao = 135 }
            };
            filmes.ForEach(b => context.Filmes.Add(b));
            context.SaveChanges();
            base.Seed(context);


        }
    }
}