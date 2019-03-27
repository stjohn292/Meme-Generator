using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using meme_generator.Models;
using meme_generator.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace meme_generator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeController : ControllerBase
    {
        private IMemeRepository repo;

        public MemeController(IMemeRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Meme>> Get()
        {
            return repo.GetAll().ToArray();
        }

        [HttpPost]
        public void Post([FromBody] Meme meme)
        {
            repo.Create(meme);
        }
    }
}