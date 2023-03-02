using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class ProductAttribute
{
    public int Id { get; set; }

    public int ProductId { get; set; }

    public string Variant { get; set; } = null!;

    public string ImageLink { get; set; } = null!;

    public decimal Price { get; set; }

    public int Sold { get; set; }

    public int Stock { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ICollection<Cart> Carts { get; } = new List<Cart>();

    public virtual ICollection<OrderProduct> OrderProducts { get; } = new List<OrderProduct>();

    public virtual Product Product { get; set; } = null!;
}
