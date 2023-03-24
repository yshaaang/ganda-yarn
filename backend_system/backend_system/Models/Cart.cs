using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Cart
{
    public string Id { get; set; } = null!;

    public string UserId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public string AttributeId { get; set; } = null!;

    public int Quantity { get; set; }

    public decimal TotalPrice { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ProductAttribute Attribute { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
