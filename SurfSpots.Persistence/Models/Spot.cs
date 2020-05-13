using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurfSpots.Persistence.Models
{
	public class Spot
	{
		public int Id { get; set; }
		public string Name {get; set; }
		public string Country { get; set; }
		public string Region { get; set; }
		public string Tides { get; set; }
		public string BestTide { get; set; }
		public double MinSwell { get; set; }
		public double MaxSwell { get; set; }
		public string SwellDirection { get; set; }
		public string BestSwellDirection { get; set; }
		public string Notes { get; set; }
	}
}
