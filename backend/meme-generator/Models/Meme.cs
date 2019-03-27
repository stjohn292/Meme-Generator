using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meme_generator.Models
{
    public class Meme
    {
    public int Id { get; set; }
    public string TopText { get; set; }
    public string ImagePath { get; set; }
    public string BottomText { get; set; }
    }
}
