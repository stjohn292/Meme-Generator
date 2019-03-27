using meme_generator.Controllers;
using meme_generator.Models;
using meme_generator.Repositories;
using NSubstitute;
using System;
using System.Linq;
using Xunit;

namespace meme_generatorTests
{
    public class MemeControllerTest
    {
        [Fact]
        public void Post_Creates_New_Meme()
        {
            var meme = new Meme();
            var repo = Substitute.For<IMemeRepository>();
            var underTest = new MemeController(repo);

            underTest.Post(meme);

            repo.Received().Create(meme);
        }
    }
}
