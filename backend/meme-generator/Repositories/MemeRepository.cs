using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using meme_generator.Models;
using Microsoft.AspNetCore.Mvc;

namespace meme_generator.Repositories
{
    public class MemeRepository : IMemeRepository
    {
        MemeContext db;

        public MemeRepository(MemeContext db)
        {
            this.db = db;
        }

        public void Create(Meme meme)
        {
            db.Memes.Add(meme);
            db.SaveChanges();
        }

        public IEnumerable<Meme> GetAll()
        {
            return db.Memes.ToList();
        }
    }
}
