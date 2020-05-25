using Microsoft.EntityFrameworkCore;
using SurfSpots.Persistence.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurfSpots.Persistence
{
	public class SurfSpotsDBContext : DbContext
	{
		public DbSet<Spot> Spots { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"Data Source=(localdb)\v13.0;Initial Catalog=SpotsDb;");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Spot>(entity =>
			{
				entity.ToTable("Spots");

				entity.Property(e => e.Name)
					.IsRequired()
					.HasColumnName("Name")
					.HasColumnType("varchar(100)");



			});

			modelBuilder.Entity<Spot>().HasData(
				new Spot
				{
					Id = 1,
					Name = "Ribeira D'Ilhas",
					Country = "Portugal",
					Region = "Lisbon",
					LowTide = true,
					MidTide = true,
					HighTide = true,
					BestMidTide = true,
					MinSwell = 0.5,
					MaxSwell = 3,
					SwellDirection = "180-360",
					BestSwellDirection = "",
					Notes = ""
				},
				new Spot
				{
					Id = 2,
					Name = "Sao Juliao - The Left",
					Country = "Portugal",
					Region = "Lisbon",
					LowTide = true,
					BestLowTide = true,
					MinSwell = 1,
					MaxSwell = 3,
					SwellDirection = "180-360",
					BestSwellDirection = "",
					Notes = ""
				},
				new Spot
				{
					Id = 3,
					Name = "Mawi",
					Country = "Indonesia",
					Region = "Lombok",
					LowTide = true,
					MidTide = true,
					HighTide = true,
					BestMidTide = true,
					MinSwell = 0.5,
					MaxSwell = 5,
					SwellDirection = "220-270",
					BestSwellDirection = "",
					Notes = ""
				}
			);
		}
	}
}
