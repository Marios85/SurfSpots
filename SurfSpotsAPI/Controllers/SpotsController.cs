﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SurfSpots.Persistence;
using SurfSpots.Persistence.Models;

namespace SurfSpotsAPI.Controllers
{
    [Route("api/Spots")]
    [ApiController]
    public class SpotsController : ControllerBase
    {
        private readonly SurfSpotsDBContext _context;

        public SpotsController(SurfSpotsDBContext context)
        {
            _context = context;
        }

        // GET: api/Spots
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Spot>>> GetSpots()
        {
            return await _context.Spots.ToListAsync();
        }

        // GET: api/Spots/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Spot>> GetSpot(int id)
        {
            var spot = await _context.Spots.FindAsync(id);

            if (spot == null)
            {
                return NotFound();
            }

            return spot;
        }

        // PUT: api/Spots/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpot(int id, Spot spot)
        {
            if (id != spot.Id)
            {
                return BadRequest();
            }

            _context.Entry(spot).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpotExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Spots
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Spot>> PostSpot(Spot spot)
        {
            _context.Spots.Add(spot);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetSpot", new { id = spot.Id }, spot);
            return CreatedAtAction(nameof(GetSpot), new { id = spot.Id }, spot);
        }

        // DELETE: api/Spots/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Spot>> DeleteSpot(int id)
        {
            var spot = await _context.Spots.FindAsync(id);
            if (spot == null)
            {
                return NotFound();
            }

            _context.Spots.Remove(spot);
            await _context.SaveChangesAsync();

            return spot;
        }

        private bool SpotExists(int id)
        {
            return _context.Spots.Any(e => e.Id == id);
        }
    }
}
