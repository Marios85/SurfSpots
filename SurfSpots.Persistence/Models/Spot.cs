using SurfSpots.Persistence.Models.Enums;
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
		public bool Left { get; set; }
		public bool Right { get; set; }
		public BreakTypeEnum breakType { get; set; }
		public bool LowTide { get; set; }
		public bool MidTide { get; set; }
		public bool HighTide { get; set; }
		public double MinSwell { get; set; }
		public double MaxSwell { get; set; }
		public string SwellDirection { get; set; }
		public bool BestLowTide { get; set; }
		public bool BestMidTide { get; set; }
		public bool BestHighTide { get; set; }
		public string BestSwellDirection { get; set; }
		public string Notes { get; set; }
	}
}
