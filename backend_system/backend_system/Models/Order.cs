using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Order
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public decimal TotalPrice { get; set; }

    public string StatusCode { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ICollection<OrderProduct> OrderProducts { get; } = new List<OrderProduct>();

    public virtual Status StatusCodeNavigation { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
