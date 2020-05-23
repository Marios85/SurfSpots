using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace SurfSpots.Persistence.Models.Enums
{
	

	[JsonConverter(typeof(JsonStringEnumConverter))]
	public enum BreakTypeEnum
	{
		beach = 0,
		reef = 1,
		point = 2
	}
}
