using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class OrderProduct
{
    public string Id { get; set; } = null!;

    public string OrderId { get; set; } = null!;

    public string UserId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public string AttributeId { get; set; } = null!;

    public int Quantity { get; set; }

    public decimal Price { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ProductAttribute Attribute { get; set; } = null!;

    public virtual Order Order { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual Review? Review { get; set; }

    public virtual User User { get; set; } = null!;
}
