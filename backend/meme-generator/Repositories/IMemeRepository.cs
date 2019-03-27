using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using meme_generator.Models;

namespace meme_generator.Repositories
{
    public interface IMemeRepository
    {
        void Create(Meme meme);
        IEnumerable<Meme> GetAll();
      
    }
}
