using meme_generator.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meme_generator
{
    public class MemeContext : DbContext
    {
        public DbSet<Meme> Memes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=Team3Mmemes;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Meme>().HasData(
            new Meme()
            {
                Id = -1,
                TopText = "Hellooo..",
                ImagePath = "/Images/Grandma.jpg",
                BottomText = "Is anybody in there?",
            },
            new Meme()
            {
                Id =-2,
                TopText = "I'm just in this",
                ImagePath = "/Images/money.jpg",
                BottomText = "for the money!"
            }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}

