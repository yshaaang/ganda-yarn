using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class OrderProduct
{
    public int Id { get; set; }

    public int OrderId { get; set; }

    public int CustomerId { get; set; }

    public int ProductId { get; set; }

    public int AttributeId { get; set; }

    public virtual ProductAttribute Attribute { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual Order Order { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual ICollection<Review> Reviews { get; } = new List<Review>();
}
