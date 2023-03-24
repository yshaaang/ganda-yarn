using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Review
{
    public string Id { get; set; } = null!;

    public string OrderProductId { get; set; } = null!;

    public string UserId { get; set; } = null!;

    public int Rate { get; set; }

    public string Comment { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual OrderProduct OrderProduct { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
