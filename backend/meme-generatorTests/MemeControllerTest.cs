using meme_generator.Controllers;
using System;
using System.Linq;
using Xunit;

namespace meme_generatorTests
{
    public class MemeControllerTest
    {
        [Fact]
        public void Get_Returns_List_Of_Memes()
        {
            var underTest = new MemeController();

            var result = underTest.Get();

            Assert.Equal(2, result.Value.Count());
        }
    }
}
