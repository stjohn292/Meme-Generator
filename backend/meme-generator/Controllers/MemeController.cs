﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace meme_generator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeController : ControllerBase
    {
        private static List<string> all = new List<string>()
        {

        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }
    }
}